package se.alex.lexicon.marketplace.service;

import java.util.List;

import se.alex.lexicon.marketplace.dto.AdvertisementDTO;

public interface AdvertisementService {
    AdvertisementDTO createAdvertisement(AdvertisementDTO advertisementDTO, String username);
    List<AdvertisementDTO> findAllValidAdvertisements();
}