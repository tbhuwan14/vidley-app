import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startInd = (pageNumber - 1) * pageSize;
  return _(items).slice(startInd).take(pageSize).value();
}
