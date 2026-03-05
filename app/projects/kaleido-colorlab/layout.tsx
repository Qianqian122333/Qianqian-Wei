import ThemeOverride from "@/components/ThemeOverride";

const kaleidoTheme = { "--primary": "#B3EF5E" };

export default function KaleidoColorLabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeOverride overrides={kaleidoTheme} />
      {children}
    </>
  );
}
