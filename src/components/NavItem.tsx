'use client'

import { PRODUCT_CATEGORIES } from "@/config"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

type Category = (typeof PRODUCT_CATEGORIES)[number]

interface NavItemProps {
  category: Category
  handleOpen: () => void
  close: () => void
  isOpen: boolean
  isAnyOpen: boolean
}

const NavItem = ({ 
  isAnyOpen,
  category,
  handleOpen,
  close,
  isOpen,}: NavItemProps) =>  {
    return <div className="flex"> 
       <div className="relative flex items-center">
        <Button
          className='gap-1.5'
          onClick={handleOpen}
          variant={isOpen ? 'secondary' : 'ghost'}>
          {category.label}
          <ChevronDown
            className={cn(
              "h-4 w-4 text-muted-foreground transition-transform",
              isOpen && "rotate-180"
            )}
          />
        </Button>
       </div>
    </div>
} 

export default NavItem
