import React from "react";

function DashboardPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-secondary-foreground hover:text-primary">
                  Welcome back,
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-primary-foreground">
                  Alexandre
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--card-background)] soft-shadow">
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <img
                  alt="User profile"
                  className="h-12 w-12 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG-jm4A7cphrSranDZdxspg8jaM-NsYbgJbDl1z5qrtS3VVUcDyDQqd6mljjJVgPaoFlwcMh1eyKvovtcnu81SoN6a9u1h0tEv6fAIFliVVGs74bb8omBc-LYK6qUDnIKhTsUJu4SGz-LM7H6g5rFOgH5sTzz1lQ1Q3WwGM4-Oq48oe-hsPmQqpM0UD-M56oavQVWKo4KxYHhw52vy8EoUOTxmKF9hjQoamu7iLkiXO_k_3gQnSxU21hgcgOF7h8-euG_A_fvORkM"
                />
              </div>
            </header>
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-primary-color">
                Your Devices
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-[var(--card-background)] p-4 soft-shadow transition-all hover:soft-shadow-lg">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <svg
                      className="h-8 w-8 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <p className="font-semibold">Lights</p>
                  <p className="text-sm text-secondary-foreground hover:text-primary">
                    4 Active
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-[var(--card-background)] p-4 soft-shadow transition-all hover:soft-shadow-lg">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                    <svg
                      className="h-8 w-8 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <p className="font-semibold">AC</p>
                  <p className="text-sm text-secondary-foreground hover:text-primary">
                    72°F
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-[var(--card-background)] p-4 soft-shadow transition-all hover:soft-shadow-lg">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                    <svg
                      className="h-8 w-8 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <p className="font-semibold">TV</p>
                  <p className="text-sm text-secondary-foreground hover:text-primary">
                    On
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gray-300 bg-transparent p-4 transition-all hover:bg-gray-50">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
                    <svg
                      className="h-8 w-8 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 4v16m8-8H4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-600">Add</p>
                  <p className="text-sm text-gray-400">New Device</p>
                </div>
              </div>
            </section>
            <section className="mt-8">
              <h2 className="text-xl font-semibold tracking-tight text-primary-foreground">
                Saved Scenes
              </h2>
              <div className="mt-4 @container">
                <div className="grid grid-cols-1 gap-4 @lg:grid-cols-2">
                  <div className="relative overflow-hidden rounded-2xl bg-[var(--card-background)] soft-shadow transition-all hover:soft-shadow-lg">
                    <img
                      alt="Living room"
                      className="h-40 w-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD77-ATz81l6BU7Wc9dWN-B1V31V8_51JM0dDPfZAgphXMqZ6uNqTFcexBU26waCUPAHC-bHf0PmNzS_fHKsIw9XPT7ZRoN17HIvPIBPFwZqyoWwG0b2M9V8zcNJwv-uf8fXsUei_TkMeU_exlCYzUFtCQhJD7mCgObYS6pFzAoBGy90nTaVTOPCy5NT-R2g9xtUEgFMYt9jL7KSbzBr0SjZPbvjqW6bd6W045R8bVU09tK_obB5n9CARl7LntF46bzHQGTEADYlOM"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-lg font-bold text-white">
                        Movie Night
                      </h3>
                      <p className="text-sm text-gray-200">
                        Lights dim, TV on, AC at 70°F
                      </p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl bg-[var(--card-background)] soft-shadow transition-all hover:soft-shadow-lg">
                    <img
                      alt="Bedroom"
                      className="h-40 w-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUB5UZ47FiAS8Vnk8Abkwph7b1LuOV2QjrJfEM9VYksWvcsjfBPUFTT7nfq8mdLVt35lzo6A7kPqHG5R1ydUgfA9LJzOquKy2VnsvhFgMs2Tto6f0zITaP3g5tVIpswC_flW8ujGqR10EpOppE0Uxj6RR0Tn8bPVR_XGQJVaBhEVUsU36D4kG2Uq9ZkxKaLsZzv7ji5Y_lrm6T8pZZgkvW6mvG8LiR3Ni_9kSaXT2eEPA4EJgIb_NwHpaOtE11HodNdIyquBopzws"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-lg font-bold text-white">
                        Good Morning
                      </h3>
                      <p className="text-sm text-gray-200">
                        Lights on, Curtains open
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <footer className="sticky bottom-0 border-t border-[var(--border-color)] bg-white/80 backdrop-blur-sm">
          <nav className="mx-auto flex max-w-4xl justify-around">
            <a
              className="flex flex-1 flex-col items-center gap-1 py-3 text-primary"
              href="#"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"></path>
              </svg>
              <span className="text-xs font-semibold">Home</span>
            </a>
            <a
              className="flex flex-1 flex-col items-center gap-1 py-3 text-secondary-foreground hover:text-primary transition-colors"
              href="#"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="text-xs font-semibold">Rooms</span>
            </a>
            <a
              className="flex h-16 w-16 -translate-y-6 transform items-center justify-center rounded-full bg-primary text-white soft-shadow-lg"
              href="#"
            >
              <svg
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M12 2a1 1 0 011 1v8a1 1 0 11-2 0V3a1 1 0 011-1zM6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              className="flex flex-1 flex-col items-center gap-1 py-3 text-secondary-foreground hover:text-primary transition-colors"
              href="#"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="text-xs font-semibold">Automations</span>
            </a>
            <a
              className="flex flex-1 flex-col items-center gap-1 py-3 text-secondary-foreground hover:text-primary transition-colors"
              href="#"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="text-xs font-semibold">Profile</span>
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default DashboardPage;
