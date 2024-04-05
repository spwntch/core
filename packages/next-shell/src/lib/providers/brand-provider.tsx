'use client';
import { PropsWithChildren, createContext, useContext } from 'react';

export interface IBrand {
  logoUrl?: { light?: string; dark?: string };
  markUrl?: { light?: string; dark?: string };
  markText?: string;
  tagline?: string;
  about?: IBrandAbout;
  contact?: IBrandContact;
  social?: IBrandSocial;
  legal?: IBrandLegal;
}

export interface IBrandAbout {
  title?: string;
  body: string;
}

export interface IBrandContact {
  website: string;
  mail: string;
  phone: string;
}

export interface IBrandSocial {
  linkedin?: string;
  youtube?: string;
  facebook?: string;
}

export interface IBrandLegal {
  copyrightYear: string;
  companyName: string;
}

export const DEFAULT_BRAND: IBrand = {};

export const AuthBrand = createContext<IBrand>(DEFAULT_BRAND);

export const useBrand = () => useContext(AuthBrand);

export interface IBrandProviderProps {
  /**
   * The brand object.
   */
  brand?: IBrand;
}

export const BrandProvider = ({
  brand,
  children,
}: IBrandProviderProps & PropsWithChildren) => {
  const context: IBrand = { ...DEFAULT_BRAND, ...brand };

  return <AuthBrand.Provider value={context}>{children}</AuthBrand.Provider>;
};
