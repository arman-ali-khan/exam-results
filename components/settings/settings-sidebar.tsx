'use client';

import { useEffect } from 'react';
import { useSettings } from '@/hooks/use-settings';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { BOARDS, EXAM_TYPES, YEARS } from '@/lib/constants';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SettingsSidebarProps {
  className?: string;
}

export function SettingsSidebar({ className }: SettingsSidebarProps) {
  const {
    board,
    setBoard,
    year,
    setYear,
    examType,
    setExamType,
    showExamType,
    setShowExamType,
    showYear,
    setShowYear,
    showBoard,
    setShowBoard,
  } = useSettings();

  return (
    <div
      className={cn(
        'flex h-full w-full flex-col border-r bg-muted/40 py-4',
        className
      )}
    >
      <div className="px-4 py-2">
        <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
          Settings
        </h2>
        <ScrollArea className="h-[calc(100vh-9rem)]">
          <div className="space-y-6 px-2">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="show-exam-type" className="text-sm font-medium">
                  Show Exam Type
                </Label>
                <Switch
                  id="show-exam-type"
                  checked={showExamType}
                  onCheckedChange={setShowExamType}
                />
              </div>
              {showExamType && (
                <Select value={examType} onValueChange={setExamType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Exam Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {EXAM_TYPES.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="show-year" className="text-sm font-medium">
                  Show Year
                </Label>
                <Switch
                  id="show-year"
                  checked={showYear}
                  onCheckedChange={setShowYear}
                />
              </div>
              {showYear && (
                <Select value={year} onValueChange={setYear}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {YEARS.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="show-board" className="text-sm font-medium">
                  Show Board
                </Label>
                <Switch
                  id="show-board"
                  checked={showBoard}
                  onCheckedChange={setShowBoard}
                />
              </div>
              {showBoard && (
                <Select value={board} onValueChange={setBoard}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Board" />
                  </SelectTrigger>
                  <SelectContent>
                    {BOARDS.map((board) => (
                      <SelectItem key={board.value} value={board.value}>
                        {board.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}