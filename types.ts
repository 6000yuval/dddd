import React from 'react';

export interface Article {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  content: React.ReactNode; 
  readTimeMinutes: number;
  lastUpdated: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  color: string; // For UI theming
  icon?: React.ReactNode;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}