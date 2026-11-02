// js/conectar.js
//Database : KKT&T_s7Ntp#aDS

// 1. Configure aqui as suas credenciais do Supabase
const SUPABASE_URL = 'https://ixdahuopmbfpbuevhlfg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4ZGFodW9wbWJmcGJ1ZXZobGZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM1Njk4NjksImV4cCI6MjEwOTE0NTg2OX0.vvl7JXEWgZEe8qJ4JR4Ft5fPXyVlTjywQmdCmUiiuWg';

// 2. Inicializa o cliente do Supabase globalmente
const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);