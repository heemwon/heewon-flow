import { createSupabaseServerClient } from "@/lib/supabase/server";
import { settingsMock } from "../mocks/settings.mock";
import type { Settings } from "../types/settings.types";

const SETTINGS_ID = "dashboard-settings";
let memorySettings: Settings = { ...settingsMock };

interface SettingsRow {
  workspace_name: string;
  admin_name: string;
  admin_email: string;
  email_notification: boolean;
  user_join_notification: boolean;
  report_cycle: Settings["reportCycle"];
  two_factor_auth: boolean;
  session_timeout: Settings["sessionTimeout"];
}

const toSettings = (row: SettingsRow): Settings => ({
  workspaceName: row.workspace_name,
  adminName: row.admin_name,
  adminEmail: row.admin_email,
  emailNotification: row.email_notification,
  userJoinNotification: row.user_join_notification,
  reportCycle: row.report_cycle,
  twoFactorAuth: row.two_factor_auth,
  sessionTimeout: row.session_timeout,
});

const toSettingsRow = (settings: Settings): SettingsRow & { id: string } => ({
  id: SETTINGS_ID,
  workspace_name: settings.workspaceName,
  admin_name: settings.adminName,
  admin_email: settings.adminEmail,
  email_notification: settings.emailNotification,
  user_join_notification: settings.userJoinNotification,
  report_cycle: settings.reportCycle,
  two_factor_auth: settings.twoFactorAuth,
  session_timeout: settings.sessionTimeout,
});

export async function getSettingsDataFromSource(): Promise<Settings> {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return memorySettings;
  }

  const { data, error } = await supabase
    .from("settings")
    .select(
      "workspace_name,admin_name,admin_email,email_notification,user_join_notification,report_cycle,two_factor_auth,session_timeout"
    )
    .eq("id", SETTINGS_ID)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data ? toSettings(data as SettingsRow) : settingsMock;
}

export async function updateSettingsInSource(
  payload: Settings
): Promise<Settings> {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    memorySettings = payload;

    return payload;
  }

  const { data, error } = await supabase
    .from("settings")
    .upsert(toSettingsRow(payload), { onConflict: "id" })
    .select(
      "workspace_name,admin_name,admin_email,email_notification,user_join_notification,report_cycle,two_factor_auth,session_timeout"
    )
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return toSettings(data as SettingsRow);
}
