export function requiredInputs(input) {
    if (input.trim().length === 0) {
        return "Input is required";
    }
    return true;
}
