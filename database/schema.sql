-- users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nome TEXT NOT NULL,
  telefone TEXT NOT NULL UNIQUE,
  idade INTEGER,
  peso NUMERIC,
  altura NUMERIC,
  objetivo TEXT,
  doencas TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- medications table
CREATE TABLE medications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  medicamento TEXT NOT NULL,
  horario TIME NOT NULL,
  frequencia TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- medication_logs table
CREATE TABLE medication_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  medication_id UUID REFERENCES medications(id) ON DELETE CASCADE,
  status TEXT NOT NULL CHECK (status IN ('Tomou', 'Não Tomou', 'Pendente')),
  data_hora TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- workouts table
CREATE TABLE workouts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  dias_semana TEXT NOT NULL, -- e.g., 'Segunda, Quarta, Sexta'
  horario TIME NOT NULL,
  tipo TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- reports table
CREATE TABLE reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  conteudo TEXT NOT NULL,
  data TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE medications ENABLE ROW LEVEL SECURITY;
ALTER TABLE medication_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE workouts ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;

-- Create policies (Optional: adjust based on actual auth implementation)
CREATE POLICY "Enable read access for authenticated users" ON users FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Enable insert for authenticated users" ON users FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Enable update for authenticated users" ON users FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable read access for authenticated users" ON medications FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Enable insert for authenticated users" ON medications FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable read access for authenticated users" ON medication_logs FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Enable insert for authenticated users" ON medication_logs FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Enable update for authenticated users" ON medication_logs FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable read access for authenticated users" ON workouts FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Enable insert for authenticated users" ON workouts FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable read access for authenticated users" ON reports FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Enable insert for authenticated users" ON reports FOR INSERT WITH CHECK (auth.role() = 'authenticated');
