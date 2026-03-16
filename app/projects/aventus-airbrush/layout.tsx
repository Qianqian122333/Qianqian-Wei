import ThemeOverride from "@/components/ThemeOverride";

const aventusTheme = { "--primary": "#E8B04A" };

export default function AventusAirbrushLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeOverride overrides={aventusTheme} />
      {children}
    </>
  );
}
