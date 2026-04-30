export default function handler(req, res) {
  const { number } = req.query;

  // agar specific number ho tabhi data de
  if (number === "919876543210") {
    return res.status(200).json({
      success: true,
      number: "919876543210",
      name: "Demo User",
      carrier: "Jio",
      circle: "Delhi",
      status: "Active",
      source: "Demo API by MYNK"
    });
  }

  // baki sab ke liye same fixed response
  return res.status(200).json({
    success: false,
    message: "No data found (Demo API)"
  });
}
