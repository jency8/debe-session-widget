# Debe Learning - Tutoring Session Widget

A responsive tutoring session widget built with Next.js and TypeScript.

## Project Overview

This project allows parents to view upcoming tutoring sessions and request a reschedule for a selected session.

The rescheduling flow includes client-side validation and server-side validation to ensure that invalid session times cannot be submitted.

## Features

- View upcoming tutoring sessions
- Display subject, teacher, date and time
- Show session status
- Request session rescheduling
- Select a new date and time
- Select a rescheduling reason
- Validate that the new time is at least 2 hours from the current time
- Prevent selecting the existing session time
- Prevent past session times
- Show `Submitting...` while the request is being processed
- Display success or validation error messages
- Responsive UI

## Tech Stack

- Next.js
- React
- TypeScript
- CSS
- Turbopack

## Project Structure

```text
debe-session-widget/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── SessionList.tsx
│   └── RescheduleForm.tsx
├── data/
│   └── sessions.ts
├── lib/
│   └── requestReschedule.ts
├── types/
│   └── session.ts
├── public/
├── package.json
└── README.md