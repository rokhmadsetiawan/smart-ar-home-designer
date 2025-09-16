import React from "react";

import { Header } from "@/app/features/dashboard/components/header";
import { DeviceCard } from "@/app/features/dashboard/components/device-card";
import { SceneCard } from "@/app/features/dashboard/components/scene-card";
import { NavigationFooter } from "@/app/features/dashboard/components/navigation-footer";

const user = {
  name: "Alexandre",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDG-jm4A7cphrSranDZdxspg8jaM-NsYbgJbDl1z5qrtS3VVUcDyDQqd6mljjJVgPaoFlwcMh1eyKvovtcnu81SoN6a9u1h0tEv6fAIFliVVGs74bb8omBc-LYK6qUDnIKhTsUJu4SGz-LM7H6g5rFOgH5sTzz1lQ1Q3WwGM4-Oq48oe-hsPmQqpM0UD-M56oavQVWKo4KxYHhw52vy8EoUOTxmKF9hjQoamu7iLkiXO_k_3gQnSxU21hgcgOF7h8-euG_A_fvORkM",
};

const devices = [
  {
    title: "Lights",
    status: "4 Active",
    icon: (
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
    ),
    variant: "active" as const,
  },
  {
    title: "AC",
    status: "72°F",
    icon: (
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
    ),
    variant: "active" as const,
  },
  {
    title: "TV",
    status: "On",
    icon: (
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
    ),
    variant: "active" as const,
  },
  {
    title: "Add",
    status: "New Device",
    icon: (
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
    ),
    variant: "add" as const,
  },
];

const scenes = [
  {
    title: "Movie Night",
    description: "Lights dim, TV on, AC at 70°F",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD77-ATz81l6BU7Wc9dWN-B1V31V8_51JM0dDPfZAgphXMqZ6uNqTFcexBU26waCUPAHC-bHf0PmNzS_fHKsIw9XPT7ZRoN17HIvPIBPFwZqyoWwG0b2M9V8zcNJwv-uf8fXsUei_TkMeU_exlCYzUFtCQhJD7mCgObYS6pFzAoBGy90nTaVTOPCy5NT-R2g9xtUEgFMYt9jL7KSbzBr0SjZPbvjqW6bd6W045R8bVU09tK_obB5n9CARl7LntF46bzHQGTEADYlOM",
    alt: "Living room",
  },
  {
    title: "Good Morning",
    description: "Lights on, Curtains open",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUB5UZ47FiAS8Vnk8Abkwph7b1LuOV2QjrJfEM9VYksWvcsjfBPUFTT7nfq8mdLVt35lzo6A7kPqHG5R1ydUgfA9LJzOquKy2VnsvhFgMs2Tto6f0zITaP3g5tVIpswC_flW8ujGqR10EpOppE0Uxj6RR0Tn8bPVR_XGQJVaBhEVUsU36D4kG2Uq9ZkxKaLsZzv7ji5Y_lrm6T8pZZgkvW6mvG8LiR3Ni_9kSaXT2eEPA4EJgIb_NwHpaOtE11HodNdIyquBopzws",
    alt: "Bedroom",
  },
];

function DashboardPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Header userName={user.name} userImage={user.image} />
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-primary-color">
                Your Devices
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {devices.map((device, index) => (
                  <DeviceCard
                    key={index}
                    title={device.title}
                    status={device.status}
                    icon={device.icon}
                    variant={device.variant}
                  />
                ))}
              </div>
            </section>
            <section className="mt-8">
              <h2 className="text-xl font-semibold tracking-tight text-primary-foreground">
                Saved Scenes
              </h2>
              <div className="mt-4 @container">
                <div className="grid grid-cols-1 gap-4 @lg:grid-cols-2">
                  {scenes.map((scene, index) => (
                    <SceneCard
                      key={index}
                      title={scene.title}
                      description={scene.description}
                      imageSrc={scene.image}
                      alt={scene.alt}
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
        <NavigationFooter />
      </div>
    </div>
  );
}

export default DashboardPage;
