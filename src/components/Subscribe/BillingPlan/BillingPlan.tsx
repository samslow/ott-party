import { css } from '@emotion/native';
import { useTheme } from '@emotion/react';
import { Txt } from '@src/shared';
import React, { useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ThemeProps } from 'theme';
import { sectionTitleCss } from '../style';
import { Plan } from '../Subscribe';
import {
  planNameCss,
  modalCss,
  ModalView,
  PlanNameBox,
  PlanItem,
  PlanPriceBox,
} from './style';

interface Props {
  plans?: Plan[];
}

export default function BillingPlan({ plans }: Props) {
  const theme: ThemeProps = useTheme();
  const [planModalVisible, setPlanModalVisible] = useState(false);
  const [plan, setPlan] = useState<string | null>(null);
  const [price, setPrice] = useState('');

  return (
    <View>
      <View style={sectionTitleCss}>
        <Txt fontWeight="700" size={20}>
          플랜
        </Txt>
      </View>
      <PlanNameBox
        onPress={() => setPlanModalVisible((visible) => !visible)}
        activeOpacity={0.5}
        disabled={!plans}>
        <View style={planNameCss}>
          <View
            style={css`
              flex-direction: row;
              align-items: center;
            `}>
            <Txt size={15} color={plan == null ? theme.greyText : theme.text}>
              {plan ?? '플랜을 선택하세요'}
            </Txt>
          </View>
          <MaterialIcons name="keyboard-arrow-down" size={30} color={'#888'} />
        </View>
      </PlanNameBox>
      <PlanPriceBox>
        <TextInput
          style={css`
            color: ${price == '' ? theme.greyText : theme.text};
            width: 90%;
          `}
          editable={!!plans}
          keyboardType="number-pad"
          placeholder="직접 입력"
          value={String(price)}
          onChangeText={(value) => {
            const price = Number(value.replace(/[^0-9]/g, ''));

            setPrice(price > 0 ? price.toLocaleString() : '0');
          }}
        />
        <View
          style={css`
            width: 10%;
            align-items: center;
          `}>
          <Txt color={theme.greyText}>₩</Txt>
        </View>
      </PlanPriceBox>

      <Modal
        useNativeDriver
        isVisible={planModalVisible}
        style={modalCss}
        onBackdropPress={() => setPlanModalVisible(false)}>
        <ModalView>
          <Txt fontWeight="900" size={22}>
            플랜 선택하기
          </Txt>
          <FlatList
            contentContainerStyle={{ marginTop: 15 }}
            data={plans}
            renderItem={({ item }) => (
              <PlanItem
                onPress={() => {
                  setPlan(item.planName);
                  setPrice(String(item.price.toLocaleString()));
                  setPlanModalVisible(false);
                }}>
                <Txt fontWeight="700">{item.planName}</Txt>
                <Txt fontWeight="300">{`₩ ${item.price.toLocaleString()}`}</Txt>
              </PlanItem>
            )}
            keyExtractor={(item) => item.planName}
          />
        </ModalView>
      </Modal>
    </View>
  );
}
