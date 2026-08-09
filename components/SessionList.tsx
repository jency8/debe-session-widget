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
        <article className="session-card" key={session.id}>
          <div className="session-top">
            <div>
              <h2 className="session-subject">
                {session.subject}
              </h2>

              <p className="teacher">
                <strong>Teacher:</strong>{" "}
                {session.teacherName}
              </p>
            </div>

            <span className="status">
              {session.status}
            </span>
          </div>

          <div className="session-details">
            <div>
              <strong>Date &amp; Time:</strong>{" "}
              {new Date(session.datetime).toLocaleString()}
            </div>
          </div>

          <button
            type="button"
            className="reschedule-button"
            onClick={() => onReschedule(session)}
          >
            Request Reschedule
          </button>
        </article>
      ))}
    </div>
  );
}