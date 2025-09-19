export async function checkAuth() {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const res = await fetch("http://localhost:3000/access", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) return false;

    const data = await res.json();
    return data.valid; // backend should return { valid: true/false }
  } catch (err) {
    console.error("Auth check failed:", err);
    return false;
  }
}
