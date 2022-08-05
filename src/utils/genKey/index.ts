import { v4 as uuidv4 } from "uuid";

function genKey(prefix?: string) {
  const id = uuidv4();

  return prefix ? `${prefix}-${id}` : id;
}

export default genKey;
