"use client";

import { useState } from "react";

export default function PrayerRequest() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    prayer: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "9af4a4e3-f068-49e5-8005-46a82e863921",
        subject: "New Prayer Request - Omega Fire Ministries",
        from_name: form.name,
        name: form.name,
        email: form.email,
        message: form.prayer,
      }),
    });

    const result = await response.json();

    setLoading(false);

    if (result.success) {
      setMessage("✅ Prayer request sent successfully!");

      setForm({
        name: "",
        email: "",
        prayer: "",
      });
    } else {
      setMessage("❌ Something went wrong. Please try again.");
    }
  }

  return (
    <section
      id="prayer"
      data-aos="fade-up"
      className="py-24 bg-slate-100 px-6"
    >
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-yellow-500 font-semibold">
            Prayer Request
          </p>

          <h2 className="text-5xl font-bold text-blue-950 mt-4">
            We Would Love To Pray With You
          </h2>

          <p className="mt-6 text-gray-600">
            Submit your prayer request and our prayer team will stand with you in faith.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-10 space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full border rounded-xl p-4"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full border rounded-xl p-4"
          />

          <textarea
            rows={6}
            placeholder="Write your prayer request..."
            required
            value={form.prayer}
            onChange={(e) =>
              setForm({ ...form, prayer: e.target.value })
            }
            className="w-full border rounded-xl p-4"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-950 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition"
          >
            {loading ? "Sending..." : "Submit Prayer Request"}
          </button>

          {message && (
            <p className="text-center font-semibold">
              {message}
            </p>
          )}
        </form>

      </div>
    </section>
  );
}