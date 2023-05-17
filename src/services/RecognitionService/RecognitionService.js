const RECOGNIZE_ACTION_URL =
  "https://us-central1-functions-test-6e249.cloudfunctions.net/recognize"
export const recognize = async (data) => {
  const body = {
    "image": data
  }

  const response =  await fetch(RECOGNIZE_ACTION_URL, {
    method: "POST",
    // mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(body)
  })

  return response.json()
}
