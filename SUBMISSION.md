# Debe Learning Tech Intern Assessment

## Part 1 — GitHub Portfolio Walkthrough

### GitHub Profile

https://github.com/jency8

### Repository 1 — AI Powered Mental Health Chatbot

Repository:
https://github.com/jency8/mental-health-chatbot

#### Problem it solves

This project is an AI-powered mental health chatbot designed to provide users with a simple conversational interface where they can discuss stress and other concerns and receive supportive responses.

#### What I built

I developed the application using Python and Flask. I implemented user authentication and used MySQL for storing authentication-related data. I also developed a Streamlit-based chatbot interface and integrated the Gemini API to generate conversational responses.

#### Design decision I would make differently today

If I were rebuilding the project today, I would separate the application into clearer frontend and backend layers and improve the API structure. This would make the project easier to maintain and extend.

---

### Repository 2 — React Authentication System

Repository:
https://github.com/jency8/auth-system-react

#### Problem it solves

This project demonstrates a user authentication flow using React and a Node.js backend.

#### What I built

I worked on the React frontend and implemented the authentication-related user interface and flow. I also worked with the Node.js backend for handling authentication.

#### Design decision I would make differently today

I would improve the project structure by separating reusable UI components, authentication logic, and API communication into independent modules. This would make the codebase easier to maintain and test.

---

# Part 2 — Debugging Round

I created the following files in the repository:

- `part2-debug/original.ts`
- `part2-debug/fixed.ts`

The fixed version addresses the logic, asynchronous handling, typing, and security concerns in the original Cloud Function.

The fixes are explained with comments directly above the relevant code.

---

# Part 3 — Session Reschedule Widget

Repository:
https://github.com/jency8/debe-session-widget

## Overview

I built a parent-facing tutoring session widget using Next.js, React, and TypeScript.

The widget displays the student's upcoming tutoring sessions and allows the parent to request a reschedule.

Each session contains:

- Subject
- Teacher name
- Date and time
- Status
- Request Reschedule action

The reschedule form contains:

- New date and time picker
- Reason dropdown
- Conflict
- Illness
- Time zone
- Other

## Validation

The reschedule request validates that:

1. The selected time is not in the past.
2. The selected time is different from the existing session time.
3. The selected time is at least 2 hours from the current time.

The UI also provides loading and error states.

## Local Time and UTC

The date/time picker displays the parent's local time because the parent should select the tutoring time in their own timezone.

Before sending/storing the value, the application converts the selected local date/time to UTC.

This prevents timezone-related inconsistencies when the application or backend operates in a different timezone.

## Two-Hour Lead Time

The application prevents parents from selecting a time within 2 hours of the current time.

This represents a tutoring lead-time policy and avoids last-minute rescheduling requests.

The validation is implemented both in the UI and in the request validation logic so that the rule is not dependent only on client-side validation.

---

# Part 4 — Explain-It-Yourself Video

Video:
[PASTE YOUR LOOM / GOOGLE DRIVE VIDEO LINK HERE]

In the video I will walk through:

- The Session Reschedule Widget
- The component structure
- The reschedule validation
- Local time and UTC conversion
- The two-hour lockout logic
- An intentionally introduced small bug and its effect

---

# Tech Stack

- Next.js
- React
- TypeScript
- Firebase Cloud Functions concept / local stub
- Git
- GitHub

---

# Repository Structure

```text
debe-session-widget/
├── app/
├── components/
│   ├── SessionList.tsx
│   └── RescheduleForm.tsx
├── data/
│   └── sessions.ts
├── lib/
│   └── requestReschedule.ts
├── types/
│   └── session.ts
├── part2-debug/
│   ├── original.ts
│   └── fixed.ts
├── README.md
└── SUBMISSION.md