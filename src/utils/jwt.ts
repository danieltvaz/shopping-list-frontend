export function jwtDecode(jwt: string) {
  const jwtData = jwt.split(".");

  if (jwtData.length != 3) {
    throw new Error("Invalid token");
  }

  return { header: JSON.parse(atob(jwtData[0])), payload: JSON.parse(atob(jwtData[1])), signature: jwtData[2] };
}
