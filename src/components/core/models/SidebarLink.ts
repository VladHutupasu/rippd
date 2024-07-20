export interface SidebarSection {
  readonly category: string;
  readonly links: ReadonlyArray<SidebarLink>;
}

export interface SidebarLink {
  readonly name: string;
  readonly href: string;
}
