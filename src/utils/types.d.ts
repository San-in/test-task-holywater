interface Preference {
  name: string;
  labelKey: string;
  icon: string;
}

interface PreferencesGroup {
  YOUNG: Preference[];
  MIDDLE: Preference[];
  MATURE: Preference[];
  SENIOR: Preference[];
}
