# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Capacitor (native mobile wrapper)

## Is this a web wrapper app?

**Yes, technically it is a hybrid app** — your React web app is wrapped inside a native container using [Capacitor](https://capacitorjs.com/). This means:

- The UI is rendered via a **WebView** (like a built-in browser), not native UI components
- You get **full access to native APIs** (camera, push notifications, file system, etc.) through Capacitor plugins
- You **can publish to the Apple App Store and Google Play Store** — many production apps use this approach (e.g., Ionic/Capacitor apps)
- Performance is excellent for content-based apps like this vocabulary learning app

### App Store / CH Play considerations

| Store | Requirements |
|-------|-------------|
| **Google Play** | A Google Play Developer account ($25 one-time fee). Build an APK/AAB and upload. Generally easy approval. |
| **Apple App Store** | An Apple Developer account ($99/year) + a Mac with Xcode. Build an IPA and submit for review. Apple reviews may be stricter with WebView-based apps — ensure your app provides enough value and native feel. |

## 📱 Building for Android

### Prerequisites
- [Android Studio](https://developer.android.com/studio) installed
- Android SDK configured
- A physical device or emulator

### Steps

```sh
# 1. Clone and install
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install

# 2. Add the Android platform
npx cap add android

# 3. Build the web app
npm run build

# 4. Sync web assets to native project
npx cap sync android

# 5. Open in Android Studio (to run on emulator/device)
npx cap open android
# Or run directly on a connected device:
npx cap run android
```

### Building a release APK/AAB (for Google Play)

```sh
# In Android Studio:
# Build → Generate Signed Bundle / APK → Follow the wizard
# Choose AAB for Play Store upload
```

## 🍎 Building for iOS

### Prerequisites
- A **Mac** with [Xcode](https://developer.apple.com/xcode/) installed
- An Apple Developer account (for device testing & App Store)
- CocoaPods (`sudo gem install cocoapods`)

### Steps

```sh
# 1. Clone and install
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install

# 2. Add the iOS platform
npx cap add ios

# 3. Build the web app
npm run build

# 4. Sync web assets to native project
npx cap sync ios

# 5. Open in Xcode
npx cap open ios
# Or run on a connected device:
npx cap run ios
```

### Submitting to App Store

1. In Xcode, set your **Team** and **Bundle Identifier** in Signing & Capabilities
2. Select **Any iOS Device** as build target
3. **Product → Archive** → Upload to App Store Connect
4. Submit for review in [App Store Connect](https://appstoreconnect.apple.com)

## 🔄 After making changes in Lovable

Every time you pull new code changes, re-sync with native:

```sh
git pull
npm install
npm run build
npx cap sync
```

## How can I deploy the web version?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
