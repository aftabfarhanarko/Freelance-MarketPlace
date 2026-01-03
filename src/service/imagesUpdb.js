


export async function uploadToImgBB(file) {
  // ImgBB API key (তোমারটা)
  const apiKey = "a6c948ab64f7987bbf9e5477cde3a1cb";

  // FormData তৈরি করা
  const formData = new FormData();
  formData.append("key", apiKey);
  formData.append("image", file);

  try {
    const response = await fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(
        `Upload failed: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    if (data.success) {
      // direct image link return করছে (thumb নয়, full image)
      return data.data.url;
    } else {
      throw new Error(data.error?.message || "Upload failed");
    }
  } catch (error) {
    console.error("ImgBB Upload Error:", error);
    throw error; // caller-এ error handle করার জন্য
  }
}
