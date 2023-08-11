import branch, {BranchSubscriptionEvent} from 'react-native-branch';

type DeepLinkCallbackEvent = BranchSubscriptionEvent & {listenerNumber: number};

let listenerCount = 1;
export const addDeepLinkListener = (
  callback: (event: DeepLinkCallbackEvent) => void,
) => {
  const internalListenerNumber = listenerCount;
  listenerCount++;

  branch.initSessionTtl = 10000;

  console.log('added listener number:', internalListenerNumber);
  const removeListener = branch.subscribe(params =>
    callback({...params, listenerNumber: internalListenerNumber}),
  );

  return () => {
    console.log('removed listener number:', internalListenerNumber);
    removeListener();
  };
};

export const getLinkingConfig = () => ({
  prefixes: ['bundleId://'],
  subscribe() {
    const deepLinkCallback = async ({
      listenerNumber,
    }: DeepLinkCallbackEvent) => {
      console.log(
        'Received listener event at listener number: ',
        listenerNumber,
      );
    };

    const removeLinkingListener = addDeepLinkListener(deepLinkCallback);
    return () => {
      removeLinkingListener();
    };
  },
});
