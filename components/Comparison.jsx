import { Check, X, Dash } from "./Icons";

const cols = ["Scoreify", "Other providers", "Your own account"];

const rows = [
  { label: "Account trust level", vals: ["good", "bad", "bad"], notes: ["Established, higher-tier trust", "Bare-minimum approval", "Cold, no history"] },
  { label: "Years of clean history", vals: ["good", "mid", "no"], notes: ["Long, verifiable track record", "Thin or unknown", "None"] },
  { label: "Ad costs (CPMs)", vals: ["good", "bad", "bad"], notes: ["Noticeably lower", "High", "High"] },
  { label: "Approval rate on regulated offers", vals: ["good", "bad", "bad"], notes: ["Far more gets through", "Frequent rejections", "Frequent rejections"] },
  { label: "Daily monitoring & fast fixes", vals: ["good", "mid", "no"], notes: ["Every account, every day", "Varies", "On you"] },
  { label: "Stability when Meta cracks down", vals: ["good", "bad", "bad"], notes: ["Built to stay standing", "Bans common", "Bans common"] },
  { label: "You keep your page, followers & data", vals: ["good", "mid", "good"], notes: ["Always yours", "Often not", "Yes"] },
];

function Cell({ v }) {
  if (v === "good")
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-accent">
        <Check className="h-4 w-4" strokeWidth={2.4} />
      </span>
    );
  if (v === "bad")
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-red-500">
        <X className="h-4 w-4" strokeWidth={2.2} />
      </span>
    );
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-400">
      <Dash className="h-4 w-4" strokeWidth={2.2} />
    </span>
  );
}

export default function Comparison() {
  return (
    <section id="comparison" className="py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Trusted accounts vs. cold accounts and resellers
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-6 py-5 text-sm font-semibold text-slate-700">What matters</th>
                  {cols.map((c, i) => (
                    <th
                      key={c}
                      className={`px-6 py-5 text-center text-sm font-bold ${
                        i === 0 ? "text-accent-deep" : "text-slate-700"
                      }`}
                    >
                      {c}
                      {i === 0 && (
                        <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-[10px] uppercase tracking-wide text-accent-deep">
                          You
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, ri) => (
                  <tr
                    key={r.label}
                    className={`border-b border-slate-100 last:border-0 ${ri % 2 ? "bg-slate-50/60" : "bg-white"}`}
                  >
                    <td className="px-6 py-5 align-top text-sm font-medium text-slate-900">{r.label}</td>
                    {r.vals.map((v, vi) => (
                      <td
                        key={vi}
                        className={`px-6 py-5 text-center align-top ${vi === 0 ? "bg-blue-50/50" : ""}`}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <Cell v={v} />
                          <span className="text-xs leading-snug text-slate-500">{r.notes[vi]}</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
