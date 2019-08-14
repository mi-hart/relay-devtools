// @flow

import type { DevToolsHook, ReactRenderer, RendererInterface } from './types';
import type Agent from './agent';

import { attach } from './renderer';

export function initBackend(
  hook: DevToolsHook,
  agent: Agent,
  global: Object
): () => void {
  console.log('init backend', { hook, agent });
  const subs = [];
  // const subs = [
  //   hook.sub(
  //     'renderer-attached',
  //     ({
  //       id,
  //       renderer,
  //       rendererInterface,
  //     }: {
  //       id: number,
  //       renderer: ReactRenderer,
  //       rendererInterface: RendererInterface,
  //     }) => {
  //       // agent.setRendererInterface(id, rendererInterface);
  //       // Now that the Store and the renderer interface are connected,
  //       // it's time to flush the pending operation codes to the frontend.
  //       // rendererInterface.flushInitialOperations();
  //     }
  //   ),

  //   // TODO Add additional subscriptions required for profiling mode
  // ];

  // const attachRenderer = (id: number, renderer: ReactRenderer) => {
  //   let rendererInterface = hook.rendererInterfaces.get(id);

  //   // Inject any not-yet-injected renderers (if we didn't reload-and-profile)
  //   if (!rendererInterface) {
  //     rendererInterface = attach(hook, id, renderer, global);
  //     hook.rendererInterfaces.set(id, rendererInterface);
  //   }

  //   // Notify the DevTools frontend about new renderers.
  //   hook.emit('renderer-attached', {
  //     id,
  //     renderer,
  //     rendererInterface,
  //   });
  // };

  // Connect renderers that have already injected themselves.
  // hook.renderers.forEach((renderer, id) => {
  //   attachRenderer(id, renderer);
  // });

  // Connect any new renderers that injected themselves.
  // subs.push(
  //   hook.sub(
  //     'renderer',
  //     ({ id, renderer }: { id: number, renderer: ReactRenderer }) => {
  //       attachRenderer(id, renderer);
  //     }
  //   )
  // );

  // const onAgentShutdown = () => {
  //   subs.forEach(fn => fn());
  //   hook.rendererInterfaces.forEach(rendererInterface => {
  //     rendererInterface.cleanup();
  //   });
  // };
  // agent.addListener('shutdown', onAgentShutdown);
  // subs.push(() => {
  //   agent.removeListener('shutdown', onAgentShutdown);
  // });

  return () => {
    subs.forEach(fn => fn());
  };
}
