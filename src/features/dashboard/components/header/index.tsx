import { Laptop, LogOutIcon, MoonStarIcon, SunIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/common/ui/popover';
import { BellIcon, LogoIcon, SettingsIcon } from '@/assets';
import { useAuth, useTheme } from '@/common/hooks';
import { cn } from '@/lib/utils';
import AvatarIcon from './man.png';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { logout } = useAuth();

  return (
    <header className="h-16 border-b border-b-white/20 bg-[#12101A]/30">
      <div className="h-full max-w-6xl mx-auto flex justify-between items-center">
        <LogoIcon height={40} />
        <div className="flex gap-4 items-center">
          <Popover>
            <PopoverTrigger>
              {theme === 'light' && <SunIcon />}
              {theme === 'dark' && <MoonStarIcon />}
              {theme === 'system' && <Laptop />}
            </PopoverTrigger>
            <PopoverContent className="w-auto">
              <ul className="flex flex-col gap-2">
                <li>
                  <button
                    type="button"
                    className="flex items-center gap-3"
                    onClick={() => setTheme('light')}
                  >
                    <SunIcon
                      className={cn(
                        'w-5 h-5',
                        theme === 'light' && 'stroke-blue'
                      )}
                    />
                    <span className={theme === 'light' ? 'text-blue' : ''}>
                      Light
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex items-center gap-3"
                    onClick={() => setTheme('dark')}
                  >
                    <MoonStarIcon
                      className={cn(
                        'w-5 h-5',
                        theme === 'dark' && 'stroke-blue'
                      )}
                    />
                    <span className={theme === 'dark' ? 'text-blue' : ''}>
                      Dark
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex items-center gap-3"
                    onClick={() => setTheme('system')}
                  >
                    <Laptop
                      className={cn(
                        'w-5 h-5',
                        theme === 'system' && 'stroke-blue'
                      )}
                    />
                    <span className={theme === 'system' ? 'text-blue' : ''}>
                      System
                    </span>
                  </button>
                </li>
              </ul>
            </PopoverContent>
          </Popover>

          <BellIcon className="cursor-pointer" />

          <SettingsIcon className="cursor-pointer" />

          <Popover>
            <PopoverTrigger>
              <div className="h-10 w-10 rounded-full border-2 border-white flex justify-center items-center">
                <img src={AvatarIcon} alt="avatar" />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto">
              <ul className="flex flex-col gap-2">
                <li>
                  <button
                    type="button"
                    className="flex items-center gap-3"
                    onClick={logout}
                  >
                    <LogOutIcon className="w-5 h-5" />
                    <span>Log Out</span>
                  </button>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
