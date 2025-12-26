export type SceneType = 'continue' | 'choice' | 'end';

export interface Choice {
  text: string;
  nextSceneId: string;
}

export interface Scene {
  id: string;
  text: string;
  image: string;
  type: SceneType;
  choices?: Choice[];
  nextSceneId?: string;
}
