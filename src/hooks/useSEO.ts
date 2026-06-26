/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
}

export default function useSEO({ title, description }: SEOProps) {
  useEffect(() => {
    // 1. Update tab/page title
    document.title = title;

    // 2. Find or create the meta description element
    let metaDescription = document.querySelector('meta[name="description"]');
    
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute('content', description);
  }, [title, description]);
}
