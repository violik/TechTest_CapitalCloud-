'use client'

import * as React from 'react'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const items: { title: string; href: string }[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
  {
    title: 'Marketplace',
    href: '/marketplace',
  },
  {
    title: 'login',
    href: '/login',
  },
]

export function MainMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item, key) => {
          return (
            <NavigationMenuItem key={key}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
