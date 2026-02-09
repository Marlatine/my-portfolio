export const formatDate = (date: Date | null | undefined) => {
    if (!date) return "Present";
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric", day: "numeric" });
};