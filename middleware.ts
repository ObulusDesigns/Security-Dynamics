import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { allLocations } from './lib/data/locations';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if this is a service URL that might be missing segments
  const serviceMatch = pathname.match(/^\/services\/([^\/]+)\/([^\/]+)$/);
  if (serviceMatch) {
    const [, serviceSlug, locationSlug] = serviceMatch;
    
    // Find the location to get its state and county
    const location = allLocations.find(loc => loc.slug === locationSlug);
    
    if (location && location.state && location.county) {
      // Redirect to the correct URL with state and county
      const statePath = location.state.toLowerCase().replace(' ', '-');
      const countyPath = location.county.toLowerCase().replace(' ', '-');
      const correctUrl = `/services/${serviceSlug}/${statePath}/${countyPath}/${locationSlug}`;
      
      return NextResponse.redirect(new URL(correctUrl, request.url));
    }
  }
  
  // Check for service URLs missing just the county
  const partialMatch = pathname.match(/^\/services\/([^\/]+)\/([^\/]+)\/([^\/]+)$/);
  if (partialMatch) {
    const [, serviceSlug, stateOrCounty, locationSlug] = partialMatch;
    
    // Check if this might be /services/[service]/[state]/[location] missing county
    const location = allLocations.find(loc => loc.slug === locationSlug);
    
    if (location && location.state && location.county) {
      const statePath = location.state.toLowerCase().replace(' ', '-');
      const countyPath = location.county.toLowerCase().replace(' ', '-');
      
      // If the middle segment matches the state but not county, it's missing county
      if (stateOrCounty === statePath) {
        const correctUrl = `/services/${serviceSlug}/${statePath}/${countyPath}/${locationSlug}`;
        return NextResponse.redirect(new URL(correctUrl, request.url));
      }
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/services/:path*',
};