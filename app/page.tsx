"use client";

import { useState } from "react";
import SessionList from "../components/SessionList";
import RescheduleForm from "../components/RescheduleForm";
import { sessions } from "../data/sessions";
import { Session } from "../types/session";

export default function Home() {
  const [selectedSession, setSelectedSession] =
    useState<Session | null>(null);

  return (
    <main>
      <div className="container">
        <h1>Upcoming Tutoring Sessions</h1>

        <p className="intro">
          View your child&apos;s upcoming tutoring sessions.
        </p>

        <SessionList
          sessions={sessions}
          onReschedule={setSelectedSession}
        />

        {selectedSession && (
          <RescheduleForm
            session={selectedSession}
            onClose={() => setSelectedSession(null)}
          />
        )}
      </div>
    </main>
  );
}