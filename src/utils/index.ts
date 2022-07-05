export function millisecondsToDate(milliseconds: number): string {
  function formatDateString(params: {
    dateValue: number;
    dateLabel: string;
  }): string {
    if (params.dateValue == 1) {
      const uniDateLabel = params.dateLabel.substring(
        0,
        params.dateLabel.length - 1
      );
      return `${params.dateValue} ${uniDateLabel} ago`;
    }
    return `${params.dateValue} ${params.dateLabel} ago`;
  }

  const now = Date.now();
  const currentTimeStamp = now;
  const timeStamp = currentTimeStamp - milliseconds;
  const seconds = Math.floor(timeStamp / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(weeks / 4);
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return formatDateString({
      dateValue: seconds,
      dateLabel: "seconds",
    });
  } else if (minutes < 60) {
    return formatDateString({
      dateValue: minutes,
      dateLabel: "minutes",
    });
  } else if (hours < 24) {
    return formatDateString({
      dateValue: hours,
      dateLabel: "hours",
    });
  } else if (days < 7) {
    return formatDateString({
      dateValue: days,
      dateLabel: "days",
    });
  } else if (weeks < 4) {
    return formatDateString({
      dateValue: weeks,
      dateLabel: "weeks",
    });
  } else if (months < 12) {
    return formatDateString({
      dateValue: months,
      dateLabel: "months",
    });
  }

  return formatDateString({
    dateValue: years,
    dateLabel: "years",
  });
}
