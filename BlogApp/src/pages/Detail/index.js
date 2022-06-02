import React, { useEffect, useState, useLayoutEffect } from "react";
import { Modal, Share } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather, Entypo } from '@expo/vector-icons';

import api from '../../services/api';

import { 
  Banner,
  Description,
  HeaderIconButton,
  LinkButton,
  LinkText,
  SafeArea, 
  Scroll, 
  Title
} from "./styled";
import { ModalWeb } from "../../components/ModalWeb";

export function Detail() {
  const [postDetail, setPostDetail] = useState([]);
  const [postLinks, setPostLinks] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [linkOpened, setLinkOpened] = useState({});

  const bannerUrl = `http://192.168.15.6:1337${postDetail?.attributes?.cover?.data?.attributes?.url}`;

  const { params } = useRoute();
  const navigation = useNavigation();

  async function handleShare() {
    try {
      const result = await Share.share({
        message: `
        Confere esse post ${postDetail?.attributes?.title}
        ${postDetail?.attributes?.description}

        ${postLinks.map(item => item.url)}\n
        `
      });

      if(result.action === Share.sharedAction) {
        if(result.activityType) {
          console.log('Activity');
        } else {
          console.log('compartilhou');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('modal fechado');
      }

    } catch (error) {
      console.log(error);
    };
  };

  function handleOpenLink(link) {
    setModalIsVisible(true);
    setLinkOpened(link);
  };

  useEffect(() => {
    async function getPostDetail() {
      const response = await api.get(`api/posts/${params?.id}?populate=cover,category,Options`)
      setPostDetail(response.data.data);
      setPostLinks(response.data.data?.attributes?.Options);
    };
    getPostDetail();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderIconButton onPress={handleShare}>
          <Entypo name="share" size={25} color="#FFFFFF" />
        </HeaderIconButton>
      )
    })
  }, [navigation, postDetail]);

  return (
    <SafeArea>
      <Banner
        source={{uri: bannerUrl}}
        resizeMode="cover"
      />
      <Scroll showsVerticalScrollIndicator={false}>
        <Title>{postDetail?.attributes?.title}</Title>
        <Description>{postDetail?.attributes?.description}</Description>
        { postLinks.length > 0 && (
          <>
            <Title>Links</Title>
            {postLinks.map(item => (
              <LinkButton 
                key={item.id}
                onPress={() => handleOpenLink(item)}
              >
                <Feather name="link" color="#1E4687" size={14} />
                <LinkText>{item.name}</LinkText>
              </LinkButton>
            ))}
          </>
        )}
      </Scroll>
      <Modal 
        visible={modalIsVisible} 
        transparent={true} 
        animationType="slide"
      >
        <ModalWeb
          link={linkOpened?.url}
          title={linkOpened?.name}
          onClose={() => setModalIsVisible(false)}
        />
      </Modal>
    </SafeArea>
  )
}