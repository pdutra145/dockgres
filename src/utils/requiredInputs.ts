export function requiredInputs(input: string) {
  if (input.trim().length === 0) {
    return "Input is required";
  }
  return true;
}
