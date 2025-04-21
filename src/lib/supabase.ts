import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function incrementFlipCount(): Promise<void> {
  try {
    const { error } = await supabase.rpc('increment_flip_count');
    if (error) throw error;
  } catch (error) {
    console.error('Error incrementing flip count:', error);
  }
}

export async function getTotalFlips(): Promise<number> {
  try {
    const { data, error } = await supabase
      .from('total_flips')
      .select('count')
      .single();
    
    if (error) throw error;
    return data?.count || 0;
  } catch (error) {
    console.error('Error getting total flips:', error);
    return 0;
  }
}