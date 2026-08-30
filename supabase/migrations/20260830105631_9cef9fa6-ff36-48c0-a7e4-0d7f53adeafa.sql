CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL CHECK (char_length(title) BETWEEN 2 AND 100),
  category TEXT NOT NULL CHECK (category IN ('Multimédia', 'IA')),
  description TEXT NOT NULL CHECK (char_length(description) BETWEEN 10 AND 600),
  image_url TEXT,
  github_url TEXT,
  tools TEXT[] NOT NULL DEFAULT '{}',
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.projects TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.projects TO authenticated;
GRANT ALL ON public.projects TO service_role;

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Projects are publicly viewable"
ON public.projects FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Authenticated users can add projects"
ON public.projects FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
ON public.projects FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects"
ON public.projects FOR DELETE
TO authenticated
USING (true);

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER projects_set_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

INSERT INTO public.projects (title, category, description, image_url, github_url, tools, display_order) VALUES
('EcoLens', 'IA', 'Une expérience de reconnaissance visuelle qui identifie la flore tunisienne et raconte son rôle dans notre écosystème.', NULL, 'https://github.com/', ARRAY['Python', 'TensorFlow', 'React'], 1),
('Mémoire de la Médina', 'Multimédia', 'Une archive numérique immersive mêlant photographie, son et micro-interactions pour préserver les récits de la médina.', NULL, 'https://github.com/', ARRAY['Figma', 'Three.js', 'Web Audio'], 2),
('Nabta', 'IA', 'Un assistant intelligent qui aide les étudiantes à structurer leurs idées de projets et à transformer leur curiosité en prototypes.', NULL, 'https://github.com/', ARRAY['TypeScript', 'LLM', 'UX Research'], 3);