import {
  ActiveAlarmTable,
  AlarmHistoryTable,
  AlarmStats,
} from "@/components/features/alarms";

export const AlarmsPage = () => {
  return (
    <>
      <AlarmStats />
      <ActiveAlarmTable />
      <AlarmHistoryTable />
    </>
  );
};
