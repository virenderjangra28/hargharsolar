export const HARYANA_CITIES = [
  "Gurugram",
  "Faridabad",
  "Panchkula",
  "Ambala",
  "Panipat",
  "Karnal",
  "Rohtak",
  "Hisar",
  "Sonipat",
  "Yamunanagar",
  "Rewari",
  "Bhiwani",
  "Sirsa",
  "Jind",
  "Kaithal",
  "Kurukshetra",
  "Palwal",
  "Jhajjar",
  "Fatehabad",
  "Bahadurgarh",
];

export function cityFromRooftopSlug(slug) {
  const key = String(slug || "")
    .replace(/^rooftop-solar-/, "")
    .toLowerCase();
  return HARYANA_CITIES.find((city) => city.toLowerCase() === key) || null;
}

export function rooftopSolarPath(city) {
  return `/rooftop-solar-${city.toLowerCase()}`;
}
