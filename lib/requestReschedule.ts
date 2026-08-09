import {
  RescheduleRequest,
  RescheduleResponse,
} from "../types/session";

export async function requestReschedule(
  request: RescheduleRequest
): Promise<RescheduleResponse> {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const newSlotTime = new Date(request.newSlot).getTime();
  const existingSlotTime = new Date(request.existingSlot).getTime();

  if (Number.isNaN(newSlotTime)) {
    return {
      success: false,
      error: "Invalid date and time.",
    };
  }

  // The Cloud Function must reject past slots even if the UI validation
  // is bypassed by a client.
  if (newSlotTime <= Date.now()) {
    return {
      success: false,
      error: "The new session time must be in the future.",
    };
  }

  // A reschedule request must actually change the session time.
  if (newSlotTime === existingSlotTime) {
    return {
      success: false,
      error: "The new time must be different from the existing session time.",
    };
  }

  return {
    success: true,
  };
}