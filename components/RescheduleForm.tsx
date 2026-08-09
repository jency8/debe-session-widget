"use client";

import { FormEvent, useState } from "react";
import {
  RescheduleReason,
  Session,
} from "../types/session";
import { requestReschedule } from "../lib/requestReschedule";

interface RescheduleFormProps {
  session: Session;
  onClose: () => void;
}

function getMinimumDateTime(): string {
  const minimumTime = new Date(
    Date.now() + 2 * 60 * 60 * 1000
  );

  const timezoneOffset =
    minimumTime.getTimezoneOffset() * 60 * 1000;

  const localMinimum = new Date(
    minimumTime.getTime() - timezoneOffset
  );

  return localMinimum.toISOString().slice(0, 16);
}

export default function RescheduleForm({
  session,
  onClose,
}: RescheduleFormProps) {
  const [newSlot, setNewSlot] = useState("");
  const [reason, setReason] =
    useState<RescheduleReason>("Conflict");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const minimumDateTime = getMinimumDateTime();

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setError("");

    if (!newSlot) {
      setError("Please select a new date and time.");
      return;
    }

    const newSlotDate = new Date(newSlot);

    if (newSlotDate.getTime() < Date.now() + 2 * 60 * 60 * 1000) {
      setError(
        "Please select a time at least 2 hours from now."
      );
      return;
    }

    const newSlotUTC = newSlotDate.toISOString();

    setLoading(true);

    try {
      const response = await requestReschedule({
        sessionId: session.id,
        existingSlot: session.datetime,
        newSlot: newSlotUTC,
        reason,
      });

      if (!response.success) {
        setError(
          response.error ?? "Unable to reschedule."
        );
        return;
      }

      alert(
        "Reschedule request submitted successfully."
      );

      onClose();
    } catch {
      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="form-container">
      <h2>Request Reschedule</h2>

      <p>
        <strong>Subject:</strong>{" "}
        {session.subject}
      </p>

      <p>
        <strong>Teacher:</strong>{" "}
        {session.teacherName}
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="newSlot">
          New date and time
        </label>

        <input
          id="newSlot"
          type="datetime-local"
          min={minimumDateTime}
          value={newSlot}
          onChange={(event) => {
            setNewSlot(event.target.value);
            setError("");
          }}
          required
        />

        <small>
          New times must be at least 2 hours from now.
          Time is shown in your local timezone and stored in UTC.
        </small>

        <label htmlFor="reason">
          Reason
        </label>

        <select
          id="reason"
          value={reason}
          onChange={(event) =>
            setReason(
              event.target.value as RescheduleReason
            )
          }
        >
          <option value="Conflict">Conflict</option>
          <option value="Illness">Illness</option>
          <option value="Time zone">Time zone</option>
          <option value="Other">Other</option>
        </select>

        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}

        <div className="form-actions">
          <button
            type="submit"
            className="submit-button"
            disabled={loading}
          >
            {loading
              ? "Submitting..."
              : "Submit Request"}
          </button>

          <button
            type="button"
            className="cancel-button"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}