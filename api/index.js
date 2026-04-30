export default async function handler(req, res) {
  const { number } = req.query;

  // ❌ agar number allowed nahi hai
  if (number !== "919876543210") {
    return res.status(200).json({
      success: false,
      message: "Demo API"
    });
  }

  try {
    // ✅ backend API call (sirf allowed number ke liye)
    const response = await fetch(
      "https://leaked-api-kfo9.vercel.app/premiuskmsm/search/919876543210"
    );

    const data = await response.json();

    // ✅ wahi exact data return
    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error fetching data"
    });
  }
}
