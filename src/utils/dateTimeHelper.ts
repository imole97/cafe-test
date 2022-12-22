import format from "date-fns/format";
import formatDuration from "date-fns/formatDuration";



const formatDateTime = (date:string, dateFormat = "yyyy/LL/dd") => {
  if (!date) {
    return "N/A";
  }

  let formmated;

  try {
    formmated = format(new Date(date), dateFormat);
  } catch {
    formmated = format(new Date(), dateFormat);
  }

  return formmated;
};

export {formatDateTime}