export type SessionStatus = "Upcoming" | "Confirmed";

export interface Session {
  id: string;
  subject: string;
  teacherName: string;
  datetime: string;
  status: SessionStatus;
}

export type RescheduleReason =
  | "Conflict"
  | "Illness"
  | "Time zone"
  | "Other";

export interface RescheduleRequest {
  sessionId: string;
  existingSlot: string;
  newSlot: string;
  reason: RescheduleReason;
}

export interface RescheduleResponse {
  success: boolean;
  error?: string;
}