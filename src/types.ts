/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'Serum' | 'Moisturizer' | 'Cleanser' | 'Toner' | 'Cream';
  keyIngredients: string[];
  benefits: string[];
  description: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export interface ContactInquiry {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

