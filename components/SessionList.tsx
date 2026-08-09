"use client";

import { Session } from "../types/session";

interface SessionListProps {
  sessions: Session[];
  onReschedule: (session: Session) => void;
}

export default function SessionList({
  sessions,
  onReschedule,
}: SessionListProps) {
  return (
    <div className="session-list">
      {sessions.map((session) => (
        <div className="session-card" key={session.id}>
          <div>
            <p className="session-subject">{session.subject}</p>

            <p>
              <strong>Teacher:</strong> {session.teacherName}
            </p>

            <p>
              <strong>Date & Time:</strong>{" "}
              {new Date(session.datetime).toLocaleString()}
            </p>

            <span className="session-status">
              {session.status}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onReschedule(session)}
          >
            Request Reschedule
          </button>
        </div>
      ))}
    </div>
  );
}