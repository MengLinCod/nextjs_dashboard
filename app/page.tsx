import CompareLogo from '@/app/ui/Compare-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
            <div className={styles.shape} />
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
         <CompareLogo /> 
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-1 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Stop using Incognito. Real privacy starts here</strong> <p/>
            Over 3.2 billion people use Google Chrome. It's fast and convenient, but built by an advertising giant whose business relies on your data. You don't need to switch browsers to fight back. Here are the 8 essential settings to drastically reduce tracking without ditching Chrome:
          </p>
          <p>
             1. 🔒 Kill "Privacy Sandbox" Tracking</p>
<p>Problem: Google's replacing third-party cookies with "Privacy Sandbox" (Topics API, FLEDGE) – tracking your interests inside Chrome for ads.
Fix: Paste chrome:/settings/adPrivacy into your address bar. TURN OFF:
</p><p>Ad Topics</p><p>
Site-suggested Ads</p><p>
Ad Measurement</p><p>
Why:Limits Chrome's built-in ad profiling.
          </p>
      <p> 2. 🛑 Disable "Preload Pages"
Problem:Chrome loads pages it *thinks* you'll visit, sending your data (IP, cookies) to sites you haven't chosen.
Fix:Settings /</p> Privacy & security / Cookies... / Preload pages / OFF
<p>Why:Stops preemptive data leaks. Minor speed trade-off, major privacy win.
</p>
<p>       3. 🛡️ Force "HTTPS-First Mode"
Problem: HTTP connections are insecure and snoopable.
Fix:Settings / Privacy & security / Security / Always use secure connections / ON.</p>
<p>Why: Encrypts your connection whenever possible.</p>
<p>4. ⏲️ Auto-Delete Cookies & Site Data</p>
<p>Problem: Accumulated cookies enable long-term tracking.</p>
<p>Option 1: Delete cookies... when you close all windows /  ON.
<p>Option 2 (More Control): Clear browsing data / Choose what to clear every close /</p></p> Select "Cookies..." & "Cached files" / ON.
  <p> Why: Regularly wipes tracking data. Crucial for shared devices.</p>
<p>5. 🔌 Stop "Background Apps"</p>
<p>Problem: Extensions/websites can run after you close Chrome, using data/resources.</p>
<p>Fix: Settings / System / Continue running background apps... / OFF.</p>
<p>Why: Saves resources & stops hidden data access.</p>
<p>6. 📍 Lock Down "Site Permissions"</p>
<p>Problem: Sites accessing sensitive hardware (mic, cam, location); lingering permissions.</p>
<p>Fix: Settings / Privacy & security / Site Settings:</p>
<p>Location/Camera/Microphone: Set default to "Don't allow sites to..." OR review/remove sites under "Allowed".</p>
<p>Notifications:Block (unless essential).</p>
<p>Pop-ups: Keep Blocked.</p>
<p>Why: Prevents unexpected snooping & stops annoyances.</p>

<p>7. 🔐 Enable "Secure DNS"</p>
<p>Problem: Unencrypted DNS requests reveal your browsing history to ISPs/networks.</p>
<p>Fix: Settings /</p> Privacy & security / Security / Use secure DNS` / ON / Choose provider (e.g., Cloudflare `1.1.1.1` or Google `8.8.8.8`).
<p>Why: Encrypts your DNS lookups, hiding sites you visit from network spies.</p><p>Why: Encrypts your DNS lookups, hiding sites you visit from network spies.</p>
        <p>8. 🧹 Audit Extensions RUTHLESSLY</p>
<p>Problem: Extensions have massive power; many free ones harvest/sell your data.</p>
<p>Fix: Settings / Extensions / REMOVE unused/untrusted extensions.</p>
    <p>For keepers: Click Details </p>
        <p>Site access: Set to "On click" or "On specific sites".</p>
      <p> Review Permissions. Beware vague ones like "Read and change all your data...".</p>
<p>Why: Malicious/data-hungry extensions are a top threat. Less is more.</p>

       
         <Image
        src="/哈哈.png"
         width={560}
        height={620}
      className="block md:hidden"
        alt="Screenshots of the dashboard project showing desktop version"
      />
        </div>
      </div>
    </main>
  );
}
