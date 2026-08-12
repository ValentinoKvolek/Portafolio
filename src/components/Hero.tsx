"use client";

import { useState } from "react";
import { TypeLine } from "./TypeLine";
import { profile, contact } from "@/data/content";
import ProfileCard from "./ProfileCard/ProfileCard";
import { ShellPrompt } from "./ShellPrompt";

export function Hero() {
  const [typing, setTyping] = useState(true);

  return (
    <div className="mb-14">
      <div className="flex flex-wrap items-baseline gap-x-2">
        <span className="text-green">vfk</span>
        <span className="text-fg-dim">@</span>
        <span className="text-cyan">portfolio</span>
        <span className="text-fg-dim">:~$</span>
        {typing ? (
          <>
            <TypeLine text="whoami" className="text-fg-bright" onDone={() => setTyping(false)} />
            <span className="w-2 h-4 bg-green cursor-blink inline-block" />
          </>
        ) : (
          <span className="text-fg-bright">whoami</span>
        )}
      </div>

      <div className="mt-5 animate-[fadeIn_0.4s_ease-out] flex flex-col sm:flex-row sm:items-start gap-8">
        <div className="min-w-0 flex-1">
          <div className="text-2xl sm:text-4xl font-bold text-fg-bright tracking-tight">
            {profile.name}
          </div>
          <div className="mt-2 text-green-bright">{profile.role}</div>
          <div className="text-fg-dim">{profile.subrole}</div>
          <div className="text-fg-dim text-xs mt-2">{profile.location}</div>
          <div className="mt-6">
            <ShellPrompt />
          </div>
        </div>

        <div className="profile-card-slot w-[260px] mx-auto sm:mx-0 sm:shrink-0">
          <ProfileCard
            name="Valentino Kvolek"
            title="Backend Engineer"
            handle="ValentinoKvolek"
            status="Disponible"
            contactText="Contacto"
            avatarUrl="/avatar.jpg"
            showUserInfo={true}
            enableTilt={false}
            enableMobileTilt={false}
            behindGlowEnabled={false}
            behindGlowColor="rgba(79, 214, 122, 0.45)"
            innerGradient="linear-gradient(145deg,#123321cc 0%,#1f5c3b55 100%)"
            iconUrl=""
            grainUrl=""
            onContactClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          />
          <a
            href={`mailto:${contact.email}`}
            className="block text-fg-dim text-[11px] text-center mt-2 hover:text-green-bright hover:underline transition-colors"
          >
            {contact.email}
          </a>
        </div>
      </div>
    </div>
  );
}
