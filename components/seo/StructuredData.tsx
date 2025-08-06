import Script from 'next/script';
import { WithContext, Thing } from 'schema-dts';

interface StructuredDataProps {
  data: WithContext<Thing>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
      strategy="afterInteractive"
    />
  );
}